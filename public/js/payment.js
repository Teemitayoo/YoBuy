const stripe = Stripe(
    'pk_test_51LR000CFildObN1N8OgRlAMnAjNCK8VbgXCZEyDTrw8l9DNUEDKNjepNEQKwrbS657twIkdNiABRqjEWn0HsQzTp00E98mj73i'
);
const sessionID = document.getElementById('sessionID-input').value;
const orderBtn = document.getElementById('order-btn');
orderBtn.addEventListener('click', function () {
    stripe.redirectToCheckout({
        sessionId: sessionID
    });
});
