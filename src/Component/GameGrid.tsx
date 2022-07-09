import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => {
    return {
        page: {
            marginTop: '64px',
        },
    }
})

const GameGrid = () => {
    const classes = useStyles()

    return <div className={classes.page}>Game Grid</div>
}

export default GameGrid
