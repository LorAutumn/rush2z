import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'

const useStyles = makeStyles(() => {
    return {
        page: {
            marginTop: '70px',
            marginLeft: '1rem',
        },
    }
})

const GameGrid = () => {
    const classes = useStyles()
    const alphabet: Array<string> = [...Array(26)].map((_, i) =>
        String.fromCharCode(i + 65)
    )
    const [gameInput, setGameInput] = useState<string[]>([])

    const inputLogic = (
        pushedKey: string,
        gameInput: string[],
        alphabet: string[]
    ) => {
        if (pushedKey === 'KeyY') {
            pushedKey = 'KeyZ'
        } else if (pushedKey === 'KeyZ') {
            pushedKey = 'KeyY'
        }

        if (pushedKey.slice(3) === alphabet[gameInput.length]) {
            setGameInput([...gameInput, pushedKey.slice(3)])
        } else {
            return
        }
        return
    }

    return (
        <div className={classes.page}>
            <TextField
                label={'A-Z'}
                value={gameInput}
                onKeyDown={e => inputLogic(e.code, gameInput, alphabet)}
                inputProps={{
                    style: { textTransform: 'uppercase' },
                }}></TextField>
        </div>
    )
}

export default GameGrid
