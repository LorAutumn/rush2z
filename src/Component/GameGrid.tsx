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

    return <div className={classes.page}>Game Grid</div>
}

export default GameGrid
