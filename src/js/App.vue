<template>
    <div>
        <header class="header">
            <div class="container">
                <router-link to="/">
                    <div class="brand">
                        <img src="/assets/images/logo.svg" class="brand-img" alt="CoronaCompass">
                    </div>
                </router-link>
            </div>
        </header>

        <router-view />

        <footer>
            <div class="container">
                <div class="brand">
                    <span class="title">Helfen und Hilfe finden.</span>
                    <img src="/assets/images/logo.svg" class="brand-img" alt="CoronaCompass Logo">
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <ul class="link-list">
                            <li>
                                <router-link to="/initiative-eintragen">Initiative eintragen</router-link>
                            </li>
                            <li>
                                <router-link to="/privacypolicy">Privacy Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/impressum">Impressum</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-6">
                        <ul class="link-list link-list-social">
                            <li>
                                <a href="https://www.facebook.com/CoronaCompass/" target="_blank">
                                    <i class="fa fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/CoronaCompass" target="_blank">
                                    <i class="fa fa-twitter-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/coronacompass/" target="_blank">
                                    <i class="fa fa-linkedin-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCWk-YSLbYASRT3iFOzxjHXw" target="_blank">
                                    <i class="fa fa-youtube-square"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    const defaultMetaTitle = 'CoronaCompass - Helfen und Hilfe finden.';
    const suffixMetaTitle = ' - CoronaCompass';

    export default {
        mounted() {
            let title = defaultMetaTitle;

            if(this.$route.meta.title) {
                title = this.$route.meta.title + suffixMetaTitle;
            }

            document.title = title;
        },
        watch: {
            '$route' (to) {
                let title = defaultMetaTitle;

                if(to.meta.title) {
                    title = to.meta.title + suffixMetaTitle;
                }

                document.title = title;
            }
        }
    }
</script>

<!--<style lang="scss">-->
<!--    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,700i&display=swap');-->

<!--    @media (min-width: 576px) {-->
<!--        #app {-->
<!--            width: 100%;-->
<!--        }-->
<!--    }-->

<!--    @media (min-width: 768px) {-->
<!--        #app {-->
<!--            width: 640px;-->
<!--        }-->
<!--    }-->

<!--    @media (min-width: 992px) {-->
<!--        #app {-->
<!--            width: 768px;-->
<!--        }-->
<!--    }-->

<!--    @media (min-width: 1200px) {-->
<!--        #app {-->
<!--            width: 1024px;-->
<!--        }-->
<!--    }-->

<!--    body, html {-->
<!--        font-size: 18px;-->
<!--    }-->

<!--    #app {-->
<!--        font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--        -webkit-font-smoothing: antialiased;-->
<!--        -moz-osx-font-smoothing: grayscale;-->
<!--        color: #2c3e50;-->
<!--        padding: 12px;-->
<!--        box-sizing: border-box;-->
<!--        margin: auto;-->
<!--    }-->

<!--    .header-logo {-->
<!--        display: block;-->
<!--        max-width: 250px;-->
<!--        margin: 32px auto;-->
<!--    }-->

<!--    .footer-logos {-->
<!--        width: 100%;-->
<!--        margin-top: 50px;-->
<!--        list-style: none;-->
<!--        padding: 0;-->
<!--        display: flex;-->
<!--        justify-content: center;-->
<!--        align-items: baseline;-->
<!--    }-->

<!--    .footer-logos li {-->
<!--        margin: 0 15px;-->
<!--        padding: 0;-->
<!--    }-->

<!--    .footer-logos li img {-->
<!--        max-width: 200px;-->
<!--        width: 100%;-->
<!--    }-->

<!--    .linklist {-->
<!--        text-align: left;-->
<!--        display: flex;-->
<!--        justify-content: space-evenly;-->
<!--        flex-wrap: wrap;-->
<!--    }-->

<!--    .footer-logos li {-->
<!--        margin: 0 15px;-->
<!--        padding: 0;-->
<!--    }-->

<!--    .footer-logos li img {-->
<!--        max-width: 200px;-->
<!--    }-->

<!--    .linklist {-->
<!--        text-align: left;-->
<!--        display: flex;-->
<!--        justify-content: space-evenly;-->
<!--    }-->

<!--    .linklist a {-->
<!--        text-decoration: none;-->
<!--        color: gray;-->
<!--        padding-bottom: 32px;-->
<!--    }-->

<!--    .btn {-->
<!--        border-radius: 10px;-->
<!--    }-->

<!--    .custom-checkbox {-->
<!--        .custom-control-label {-->
<!--            &::before {-->
<!--                top: 0;-->
<!--                background-color: #919191;-->
<!--                border: 0;-->
<!--            }-->

<!--            &::after {-->
<!--                top: 0;-->
<!--            }-->
<!--        }-->

<!--        .custom-control-input:checked + .custom-control-label::before {-->
<!--            background-color: #71A95A;-->
<!--        }-->
<!--    }-->

<!--</style>-->
