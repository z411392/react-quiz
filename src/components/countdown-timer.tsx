import React from "react"
import { useEffect, useState } from "react"

export function CountdownTimer1({ initialTime }: { initialTime: number }) {
    const [timeLeft, setTimeLeft] = useState(initialTime)
    const [startTime, setStartTime] = useState(Date.now())
    const reset = () => {
        setStartTime(Date.now())
        setTimeLeft(initialTime)
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((timeLeft) => { // 必須從 callable 中取得前一次更新的值
                if (timeLeft <= 0) {
                    clearInterval(timer)
                    return timeLeft
                }
                return timeLeft - 1
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [startTime]) // 如果把 timeLeft 列入 deps 的話會不斷銷毀、重建 timer 就跟 setInterval 本身做的事情重疊了，所以用 setTimeout 會比較乾淨
    return <>
        <div>
            Remaining time: {timeLeft} seconds
        </div>
        <button onClick={() => reset()}>Reset</button>
    </>
}

export function CountdownTimer2({ initialTime }: { initialTime: number }) {
    const [timeLeft, setTimeLeft] = useState(initialTime)
    const reset = () => setTimeLeft(initialTime)
    useEffect(() => {
        if (timeLeft <= 0) return
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1) // 因為有宣告在 deps 可以直接取來用
        }, 1000)
        return () => clearTimeout(timer)
    }, [timeLeft])
    return <>
        <div>
            Remaining time: {timeLeft} seconds
        </div>
        <button onClick={() => reset()}>Reset</button>
    </>
}