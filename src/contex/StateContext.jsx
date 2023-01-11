import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getData } from "../api";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const [productList, setProductList] = useState([]);

  const initialState = {
    products: [],
    card: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "ADD_T0_CARD":
        // return { ...state, card: [...state.card ,{...action.payload, qty:1}]}
        const item = action.payload;
        const isExist = state.card.find((c) => c.id === item.id);
        // console.log(state.card);
        if (isExist) {
          return {
            ...state,
            card: state.card.map((c) =>
              c.id === item.id ? { ...item } : { ...c }
            ),
          };
        } else {
          return {
            ...state,
            card: [...state.card, { ...item, }],
          };
        }
      case "REMOVE_FROM_CARD":
        return {
          ...state,
          card: state.card.filter((c) => c.id !== action.payload.id),
        };
      case "CARD_EMPTY":
        return {
          ...state,
          card: (state.card = []),
        };
        
      default:
        return state;
    }
  };

  const [state, dispath] = useReducer(reducer, initialState);

  const getProducts = async () => {
    const data = await getData("/products");
    setProductList(data);
    // console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  // console.log(productList);

  useEffect(() => {
    dispath({ type: "GET_PRODUCTS", payload: productList });
    const filterProduct = productList.filter((product) =>
      product.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    dispath({ type: "GET_PRODUCTS", payload: filterProduct });
  }, [productList, search]);

  const data = { state, search, setSearch, dispath };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
