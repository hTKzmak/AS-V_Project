<script>
export default {
    data() {
        return {
            tagsData: [
                { id: 1, title: 'iPhone 13 Pro Max' },
                { id: 2, title: 'iPhone 13' },
                { id: 3, title: 'iPhone 13 Pro' },
                { id: 4, title: 'iPhone 13 Pro Max' },
                { id: 5, title: 'iPhone 13' },
                { id: 6, title: 'iPhone 13 Pro' },
                { id: 7, title: 'iPhone 13 Pro' },
                { id: 8, title: 'iPhone 13 Pro Max' },
                { id: 9, title: 'iPhone 13' },
                { id: 10, title: 'iPhone 13 Pro' },
                { id: 11, title: 'iPhone 13 Pro Max' },
                { id: 12, title: 'iPhone 13' },
                { id: 13, title: 'iPhone 13 Pro' },
                { id: 14, title: 'iPhone 13 Pro' },
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <h2>Смартфоны iPhone</h2>
        <div class="tagsAndSort">
            <div class="tags-list">
                <div class="tag-item" v-for="elem in tagsData" :id="elem.id">
                    {{ elem.title }}
                </div>
            </div>

            <div class="filter">
                <div class="filter-item">
                    <button>
                        <img src="../../assets/icons/filter.svg" alt="#">
                        Фильтр
                    </button>

                    <div class="erase-filter">
                        <div class="count">1</div>
                        <button>Сбросить фильтр</button>
                    </div>
                </div>

                <div class="sort">
                    Сортировать
                    <select name="" id="">
                        <option value="Base">По умолчанию</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
h2 {
    font-size: 40px;
    margin-left: 20px;

    @media screen and (max-width: 1440px) {
        margin: 16px 0 16px 0;
        font-size: 32px;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
}

.tagsAndSort {

    display: flex;
    justify-content: space-between;

    .tags-list {

        margin: 20px 0;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        width: 60rem;

        .tag-item {
            background-color: #F9F9F9;
            color: #585656;

            padding: 8px;
            border-radius: 8px;
            font-size: 16px;

            cursor: pointer;
            user-select: none;

            transition: 0.3s;

            &:hover {
                background-color: #0071E4;
                color: #FFF;
            }

            @media screen and (max-width: 768px) {
                margin-left: 8px;
            }

            &:first-child {
                @media screen and (max-width: 768px) {
                    margin-left: 0;
                }
            }
        }

        @media screen and (max-width: 1440px) {
            width: auto;
        }

        @media screen and (max-width: 768px) {
            display: ruby;

            overflow-x: auto;
            flex-wrap: nowrap;
            width: auto;

        }
    }

    .filter {

        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            font-size: 16px;
            display: none;
            align-items: center;
            gap: 8px;

            @media screen and (max-width: 1440px) {
                display: flex;
            }
        }

        .sort {
            display: flex;
            align-items: center;
            gap: 8px;

            select {
                padding: 8px;
                background: transparent;
                border: none;
                font-size: 16px;

                width: 150px;

                -webkit-appearance: none;
                /* Убираем стандартную стрелку в Chrome и Safari */
                -moz-appearance: none;
                /* Убираем стандартную стрелку в Firefox */
                appearance: none;
                padding-right: 20px;
                /* Добавляем немного отступа справа для новой стрелки */
                background-image: url('../../assets/icons/arrow.svg');
                /* Добавляем свою собственную стрелку */
                background-repeat: no-repeat;
                background-position: right center;
            }
        }

        @media screen and (max-width: 768px) {
            display: grid;
            justify-content: start;
            gap: 10px;
        }

    }


    @media screen and (max-width: 1440px) {
        display: grid;
    }
}
</style>