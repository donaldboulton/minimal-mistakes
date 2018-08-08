import 'material-design-lite'

export default function(payload) {
    const snackbarContainer = document.querySelector('#demo-snackbar-example')

    console.log('snack payload', payload);
    let data = {
        message: payload.notification.title,
        timeout: 5000,
        actionHandler(event) {
            location.reload()
        },
        actionText: 'Reload'
    }
    snackbarContainer.MaterialSnackbar.showSnackbar(data)

}
