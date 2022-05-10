import axios from 'axios';
import React, { useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/exercises_reducer';

const initialState = {
    exercises:[]
};

const url = 'http://localhost:5000/exercises';

const ExercisesContext = React.createContext();

export const ExercisesProvider = ({children})=> {

    const [state,dispatch] = useReducer(reducer,initialState);

    const fetchExercises = async() => {
        try {
            let res = await axios.get(url)
            let data = res.data
            dispatch({type:'FETCH_EXERCISES', payload:data})
        } catch (error) {
            dispatch({type:'FETCH_EXERCISES_ERROR'})
        }
        
    };

    useEffect(()=>{fetchExercises(url)},[]);

    return (
        <ExercisesContext.Provider value = {state}>
            {children}
        </ExercisesContext.Provider>
    )
}

export const useExercisesContext = () => {
    return useContext(ExercisesContext);
  };