import { AppBar, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => {
    return {
        appbar: {
            background: '#9EC1A3',
        },
    }
})

const MyAppBar = () => {
    const classes = useStyles()

    return (
        <AppBar>
            <Toolbar className={classes.appbar}>Rush 2 Z</Toolbar>
        </AppBar>
    )
}

export default MyAppBar
