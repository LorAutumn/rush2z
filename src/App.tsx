import { makeStyles } from '@mui/styles'
import MyAppBar from './Component/AppBar'
import Footer from './Component/Footer'
import GameGrid from './Component/GameGrid'

const useStyles = makeStyles(() => {
    return {
        root: {
            background: '#CFE0C3',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
        },
    }
})

function App() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <MyAppBar />
            <GameGrid />
            <Footer />
        </div>
    )
}

export default App
