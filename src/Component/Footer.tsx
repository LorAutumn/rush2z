import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => {
    return {
        footer: {
            position: 'absolute',
            marginBottom: '0px',
            height: '2rem',
        },
    }
})

const Footer = () => {
    const classes = useStyles()

    return <div className={classes.footer}>Footer</div>
}

export default Footer
