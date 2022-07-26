import { useCallback, useEffect, useRef, useState } from 'react'

export const useHttpRequest = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const activeHttpRequests = useRef([])
    const sendRequest = useCallback(async(url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        
        const httpAbortCtrl = new AbortController()
        activeHttpRequests.current.push(httpAbortCtrl)

        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtrl.signal
            })
            const data = await response.json()
            activeHttpRequests.current = activeHttpRequests.current.filter(reqCtrl => reqCtrl !== httpAbortCtrl)

            if(!response.ok) {
                throw new Error(data.message)
            }

            setLoading(false)
            return data
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    },[])

    const clearError = () => setError(null)

    useEffect(() => {
        return () => activeHttpRequests.current.forEach(abortCtrl => {
            abortCtrl.abort()}
        )
    },[])

    return { loading, error, clearError, sendRequest }
}