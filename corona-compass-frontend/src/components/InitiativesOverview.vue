<template>
    <div>
        <SearchHeader/>
        <div class="row">
            <div class="col-md-4">
                <div class="card card-filters">
                    <div class="card-header">
                        <div class="d-flex justify-content-between">
                            <div class="text-gray">Filtern</div>
                            <div class="reset">Zurücksetzen</div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h6>Kategorien</h6>
                        <ul :key="index" v-for="(category, index) in categories">
                            <div :for="index" class="h6">
                                <div class="custom-control custom-checkbox">
                                    <input :id="index" type="checkbox" class="custom-control-input">
                                    <label :for="index" class="custom-control-label">
                                        {{category.name}}
                                    </label>
                                </div>
                                <ul :key="i" v-for="(subcategory, i) in category.children">
                                    <div class="form-check">
                                        <input class="form-check-input" id="i" type="checkbox"/>
                                        <label :for="index" class="form-check-label">
                                            {{subcategory.name}}
                                        </label>
                                    </div>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <h2 class="font-weight-bold">Hier Bekommst Du Hilfe</h2>
                <InitiativesList :initiatives="initiatives"></InitiativesList>
            </div>
        </div>
    </div>
</template>

<script>
    import InitiativesList from "./InitiativesList";
    import SearchHeader from "./SearchHeader";

    export default {
        components: { InitiativesList, SearchHeader },
        data() {
            return {
                categories: [],
                initiatives: [],
                zipCode: "",
            };
        },
        methods: {
            fetchCategories() {
                fetch("https://coronacompass.azurewebsites.net/api/GetInitiatives?zips=" + this.zipCode)
                    .then(stream => stream.json())
                    .then(data => {
                        this.categories = data.filters.categories;
                        this.initiatives = data.initiatives;
                    })
                    .catch(error => console.error(error));
            }
        },
        mounted() {
            this.zipCode = this.$route.query.zip;
            this.fetchCategories()
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .input-group {
        border-radius: 10px;
        margin: -28px auto 22px auto;
        z-index: 2;
        max-width: 500px;
        background-color: #f6f6f6;
        display: flex;
        padding: 6px;
    }

    .input-group input,
    .input-group button {
        margin: 6px;
    }

    .input-group input {
        display: inline-block;
        flex-basis: 1;
        border-radius: 5px;
        border: none;
        flex-grow: 1;
        box-sizing: border-box;
        box-shadow: 1px 1px 10px gray;
        padding-left: 14px;
    }

    .input-group button {
        padding: 8px;
        border: none;
        color: white;
        border-radius: 5px;
        flex-basis: 1;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
    }

    .header-image {
        background-image: url("../assets/banner-city_landing_page.png");
        width: 100%;
        height: 100px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
        color: white;
        z-index: 1;
    }

    #helpee-button {
        background-color: #71a95a;
    }

    #helper-button {
        background-color: #110133;
    }

    .results-box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
    }

    .results {
        display: flex;
        flex-direction: column;
        flex-basis: 3;
        flex-grow: 1;
    }

    ul {
        padding-inline-start: 20px;
    }

    .card-filters {
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        text-align: left;
        box-sizing: border-box;
        border: 0;

        .card-header {
            background-color: transparent;
            border: 0;
        }

        .text-gray {
            color: gray;
            font-weight: bold;
            margin-bottom: 5px;
            display: inline;
        }

        .reset {
            color: #71a95a;
            text-decoration: underline;
            display: inline;
            cursor: pointer;
        }

        h6 {
            font-weight: bold;
            text-align: left;
            color: rgba(0, 0, 0, .7);
            margin-bottom: 0;
        }
    }
</style>
