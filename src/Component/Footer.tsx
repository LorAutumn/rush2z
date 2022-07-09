import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => {
    return {
        container: {
            display: 'flex',
            marginBottom: '0px',
            height: '2rem',
            marginTop: 'auto',
            width: '100vw',
            background: '#9EC1A3',
            justifyContent: 'flex-end',
        },
        footer: {
            marginTop: 'auto',
            marginBottom: 'auto',
            marginRight: '1rem',
            float: 'right',
        },
    }
})

const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <footer className={classes.footer}>copyright @lorautumn</footer>
        </div>
    )
}

export default Footer
