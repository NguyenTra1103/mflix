

/*<script src="/__/firebase/8.9.0/firebase-app.js"></script>


    <script src="/__/firebase/8.9.0/firebase-analytics.js"></script>


<script src="/__/firebase/init.js"></script>*/
<!-- The core Firebase JS SDK is always required and must be listed first -->
/*<script src="https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js"></script>

/* TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
    <script
src="https://www.gstatic.com/firebasejs/8.9.0/firebase-analytics.js">*/


    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
    apiKey: "AIzaSyArYCA14-VbksnUswWrqMmdPs5qgNxhn3I",
    authDomain: "mflix-mflix2021.firebaseapp.com",
    projectId: "mflix-mflix2021",
    storageBucket: "mflix-bbcee.appspot.com",
    messagingSenderId: "519775413902",
    appId: "1:519775413902:web:f2128094e2747d0759cbdf",
    measurementId: "G-8Y55DXE8C4"
};
    // Initialize Firebase
   /* firebase.initializeApp(firebaseConfig);
    firebase.analytics();*/
/*$(function () {
    firebase.initializeApp(firebaseConfig);
    alert(firebase.SDK_VERSION)
});*/
var uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        "microsoft.com",
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: function (authResult) {
            if (authResult.user) {
                handleSignedInUser(authResult.user);
            }
            return false;
        },
        signInFailure: function (error) {

        }
    },

    autoUpgradeAnonymousUsers: true
};
var ui
$(function () {
    firebase.initializeApp(firebaseConfig);
    ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);

    firebase.auth().onAuthStateChanged(function (user) {
        user ? handleSignedInUser(user) : handleSignedOutUser();
        $("#login-spinner").addClass("d-none")
    });
});
function handleSignedInUser(user) {
    $(".user").removeClass("d-none")
    $(".guest").addClass("d-none")

    $("#name").text(user.displayName);
    $("#email").text(user.email);
    $("#phone").text(user.phoneNumber);
    if (user.photoURL) {
        $(".avatar").attr("src",user.photoURL);
    } else {
        $(".avatar").attr("src","/images/user.svg");
    }
    $('#modal-login').modal('hide');
}
function handleSignedOutUser() {
    ui.start("#firebaseui-auth-container", uiConfig);
    $(".user").addClass("d-none")
    $(".guest").removeClass("d-none")
}



