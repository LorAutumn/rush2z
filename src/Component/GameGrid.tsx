import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

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

    return (
        <div className={classes.page}>
            <TextField
                label={'A-Z'}
                inputProps={{
                    style: { textTransform: 'uppercase' },
                }}></TextField>
        </div>
    )
}

export default GameGrid
