import {
    createContext, useCallback, useEffect, useState
} from 'react';
import {JokeService} from "../services/joke-service/joke-service";
import {LocalStorageService} from "../services/localStorage-service/localStorage-service";

export const JokesContext = createContext({});

export const JokeProvider = ({ children }) => {
    const [isLoading,setIsLoading] = useState(false)
    const [jokes,setJokes] = useState([])
    const [joke,setJoke] = useState(null)
    
    const loadRandomJoke = useCallback(async () => {
        try {
            setIsLoading(true)
            const {data} = await JokeService.getRandomJoke()
            setJoke(data)
        }catch (e){
            console.log(e)
        }finally {
            setIsLoading(false)
        }
    },[])
    
    useEffect(() => {
        const dataFromStorage = LocalStorageService.get('jokes')
        if (dataFromStorage){
            setJokes(JSON.parse(dataFromStorage))
        }
    },[])
    
    useEffect(() => {
        LocalStorageService.set('jokes',JSON.stringify(jokes))
    },[jokes])
    
    const updateJokeList = (joke) => {
        if (jokes.length && joke.id === jokes[jokes.length-1]?.id){
            removeFromJokes(joke.id)
        }else{
            if (jokes.length === 10){
                const newJokes = jokes.slice(1)
                setJokes([...newJokes, joke])
            }else{
                setJokes(prev => [...prev, joke])
            }
        }
    }
    
    const removeFromJokes = (id) => {
        const filteredJokes = jokes.filter(el => el.id !== id)
        setJokes(filteredJokes)
    }
    
    const removeJokes = () => {
        debugger
        setJokes([])
    }
    
    const returnValues = {
        isLoading,
        joke,
        jokes,
        loadRandomJoke,
        updateJokeList,
        removeFromJokes,
        removeJokes
    }
    
    return (
      <JokesContext.Provider value={returnValues}>{children}</JokesContext.Provider>
    );
};
