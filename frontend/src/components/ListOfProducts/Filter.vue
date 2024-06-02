<script>
export default {
    data() {
        return {
            rostlerData: [
                {id: 1, title: 'title', list: [
                    {id: 1, text: 'text'},
                    {id: 2, text: 'text'},
                    {id: 3, text: 'text'},
                ]},
                {id: 2, title: 'title', list: [
                    {id: 1, text: 'text'},
                    {id: 2, text: 'text'},
                    {id: 3, text: 'text'},
                    {id: 4, text: 'text'},
                    {id: 5, text: 'text'},
                ]},
            ],

            // делай для отображения функцию, как в CatalogTab
            showRosterList: true

        }
    }
}
</script>

<template>
    <div class="filter-desktop">
        <div class="filter-info">
            <div class="price-range">
                <h3>Цена</h3>
                <input type="range" name="price-range">
                <div class="price-count">
                    <input type="text" name="price-min-count" placeholder="от 33 400₽">
                    <input type="text" name="price-max-count" placeholder="до 127 400₽">
                </div>
            </div>
            <div class="rosters-list">
                <div class="roster-item" v-for="elem in rostlerData">
                    <div class="rostler-item-main" :id="elem.id" @click="showRosterList = !showRosterList">
                        <div class="title">
                            <p>{{elem.title}}</p>
                        </div>
                        <button>
                            <i class="arrow up"></i>
                        </button>
                    </div>
                    <ul v-show="showRosterList" class="rostler-item-list" v-for="index in elem.list" :id="index.id">
                        <li>
                            <input type="checkbox" name="" id="">
                            <p>{{index.text}}</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
.filter-desktop {
    background-color: #F9F9F9;
    // width: 60rem;

    .filter-info {
        padding: 32px 24px 0 140px;

        .price-range {

            h3 {
                margin: 0 0 16px 0;
                font-size: 20px;
                font-weight: 500;
            }

            input[type="range"] {
                width: 100%;
            }

            .price-count {
                display: flex;
                gap: 52px;

                input[type="text"] {
                    width: 95px;
                    padding: 10px 16px;

                    background-color: #FFF;

                    border: 1px solid #E7E7E7;
                    border-radius: 8px;

                    text-align: center;

                    font-size: 16px;
                }
            }
        }

        .rosters-list {

            margin-top: 24px;
            display: grid;
            row-gap: 8px;

            .roster-item {

                .rostler-item-main{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
    
                    padding-left: 24px;
                    padding-right: 24px;
    
                    background-color: #FFFFFF;
                    border-radius: 8px;
                }


                .rostler-item-list {
    
                    margin: 0;
                    padding-left: 24px;
                    padding-right: 24px;
    
                    background-color: #FFFFFF;
    
                    li {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        height: 45px;
    
                        input[type="checkbox"] {
                            width: 24px;
                            height: 24px;
                            border: 1px solid #878787;
                            border-radius: 8px;
                        }
                    }
                }
            }

        }
    }

}

.arrow {
    border: solid #706E6E;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;

}

.up {
    border-color: #0071E4;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}

.down {
    border-color: #706E6E;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
</style>