import {useState, useEffect} from 'react'
const useOnlineStatus = () =>{
    const [online, useOnline] = new useState(true);
    useEffect(()=>{
        window.addEventListener('offline', ()=>{
            useOnline(false);
        })
    });

    useEffect(()=>{
        window.addEventListener('online', ()=>{
            useOnline(true);
        })
    });
    return online;
}

export default useOnlineStatus