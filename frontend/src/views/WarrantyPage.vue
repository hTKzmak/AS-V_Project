<template>
    <div id="app">
        <div class="guarantee-info">
            <div class="container">
                <div class="guarantee-text">
                    <h1 class="big-title">Гарантия 1 год</h1>
                    <p class="large-text bold">
                        Приобретая в нашем магазине любой телефон, вы получаете гарантию сроком на целый год в
                        специализированном сервисном центре.
                    </p>
                    <p class="small-text">
                        Для нас очень важно обеспечить покупателей качественной продукцией, поэтому мы четко следуем
                        Постановлению Правительства РФ «Об утверждении Правил продажи отдельных видов товаров, перечня
                        товаров длительного пользования, на которые не распространяется требование покупателя о
                        безвозмездном предоставлении ему на период ремонта или замены аналогичного товара, и перечня
                        непродовольственных товаров надлежащего качества, не подлежащих возврату или обмену на
                        аналогичный
                        товар других размера, формы, габарита, фасона, расцветки или комплектации».
                    </p>
                    <p class="large-text bold bigger">
                        Согласно гарантийным обязательствам, каждый покупатель может вернуть телефон или сдать его на
                        ремонт
                        при наличии нетронутых заводских пломб. Более детальные условия приведены ниже.
                    </p>
                    <p class="small-text">
                        Подготавливая к отправке каждый заказ, мы внимательно осматриваем каждое устройство и тестируем,
                        поэтому шансы покупателей получить бракованный товар сводятся к минимуму. Для нас очень важно,
                        чтобы
                        все клиенты были довольны работой магазина, поэтому мы не допускаем к реализации устройства с
                        малейшими дефектами.
                    </p>
                    <p class="large-text bold custom-style">
                        Поднимайте себе настроение приятными покупками!
                    </p>
                    <RouterLink to="/" class="purchase-button">
                        перейти к покупкам
                    </RouterLink>
                </div>
            </div>
        </div>

        <div class="container blocks-list">
            <div v-for="(block, index) in blocks" :key="index" class="block-container">
                <div @click="toggleList(index)" class="toggle-list">
                    {{ block.isOpen ? 'Открытый список' : 'Закрытый список' }}
                    <i :class="block.isOpen ? 'arrow up' : 'arrow down'"></i>
                    <div v-if="block.isOpen" class="open-list">
                        <div class="list-content">
                            <p class="styled-text">1.1. Гарантия дает Покупателю право в течение гарантийного срока
                                производить замену или обращаться за услугами бесплатного ремонта.</p>
                            <p class="styled-text">1.2. Гарантийное обслуживание только распространяется на сотовый
                                телефон. Не обслуживаются аксессуары, которые входят в комплект:</p>
                            <ul class="styled-list">
                                <li class="styled-list-item">· кабель, соединяющий устройство с персональным
                                    компьютером;</li>
                                <li class="styled-list-item">· карта памяти;</li>
                                <li class="styled-list-item">· устройства для зарядки;</li>
                                <li class="styled-list-item">· гарнитура;</li>
                                <li class="styled-list-item">· аккумуляторная батарея.</li>
                            </ul>
                            <p class="styled-text">1.3. Мы предоставляем только указанные гарантийные обязательства, и
                                никакие более, в том числе не можем гарантировать совместимость с другой техникой и
                                изделиями.</p>
                            <p class="styled-text">1.4. В случае возникновения гарантийных обязательств, доставка товара
                                до сервисного центра осуществляется за счет Покупателя. Диагностика неисправностей,
                                ремонт или замена в случае обнаружения заводского дефекта осуществляется бесплатно.</p>
                            <p class="styled-text">1.5. Во избежание потери важной информации, которая хранится на вашем
                                устройстве, это может телефонный номер, фотографии, настоятельно рекомендуем создать
                                резервные копии данных на других носителях. Это касается информации, которая размещена
                                как на не-накопителе телефона, так и на карте памяти. Наша компания ни при каких
                                обстоятельствах не может гарантировать сохранность данных, и не несет никакой
                                ответственности за последствия, вызванные их потерей. Мы не компенсируем расходы на
                                восстановление данных, а также на покрытие убытков в любом виде деятельности, которые
                                прямо или косвенно связаны с невозможностью воспользоваться телефоном.</p>
                            <p class="styled-text">1.6. Отсчет гарантийного срока ведется со дня оформления покупки.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            blocks: [
                { isOpen: false },
                { isOpen: false },
                { isOpen: false }
            ]
        }
    },
    methods: {
        toggleList(index) {
            this.blocks[index].isOpen = !this.blocks[index].isOpen;
        }
    }
}
</script>
<style scoped lang="scss">
#app {
    box-sizing: border-box;
    background: rgba(249, 249, 249, 1);
}

.container {
    margin: 0 auto;
}

.guarantee-info {
    flex: 1;
    background: white;
    margin-bottom: 24px;
    padding-bottom: 20px;

    .guarantee-text {
        width: 830px;

        @media screen and (max-width: 1440px) {
            width: auto;
        }
    }
}

.blocks-list{
    padding-bottom: 34px;
}

.block-container {
    border-radius: 16px;
    margin-top: 8px;
}

.toggle-list {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    padding: 20px 40px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 1);

    position: relative;
    
    display: grid;
    gap: 8px;
}

.arrow {
    border: solid #706E6E;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    position: absolute;
    top: 15px;
    right: 20px;
}

.up {
    border-color: #0071E4;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}

.down {
    border-color: #0071E4;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}

.closed-list,
.open-list {
    border-radius: 16px;
    background: rgba(255, 255, 255, 1);
    font-size: 20px;
    line-height: 23.44px;
    text-align: left;
    font-weight: bold;
    margin-top: 20px;
}

.list-header {
    font-weight: bold;
    margin-bottom: 10px;
}

.list-content p {
    margin-bottom: 10px;
}

.list-content ul {
    list-style-type: disc;
    margin-left: 20px;
}

.list-content ul li {
    font-weight: normal;
}

.big-title {
    font-size: 40px;
    line-height: 46.88px;
    text-align: left;
}

.large-text {
    font-size: 1.3rem;
    line-height: 1.5;
    text-align: left;
}

.small-text {
    font-size: 1rem;
    line-height: 1.5;
    text-align: left;
}

.bold {
    font-weight: bold;
}

.bigger {
    font-size: 1.5rem;
}

.custom-style {
    margin-top: 20px;
}

.purchase-button {
    width: 185px;
    height: 56px;
    padding: 0 16px;
    margin-top: 20px;
    border-radius: 8px;
    gap: 8px;
    color: rgba(255, 255, 255, 1);
    font-size: 15px;
    line-height: 18.75px;
    text-align: center;
    background-color: rgba(0, 113, 228, 1);
    border: 2px solid rgba(0, 113, 228, 1);
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
}

.purchase-button:hover {
    background-color: rgba(0, 90, 180, 1);
    border-color: rgba(0, 90, 180, 1);
}

p {
    margin-bottom: 16px;
}

.styled-text {
    font-size: 17px;
    line-height: 19.92px;
    text-align: left;
}

.styled-list {
    font-size: 17px;
    line-height: 19.92px;
    text-align: left;
    margin-left: 20px;
}

.styled-list-item {
    font-size: 17px;
    line-height: 19.92px;
    text-align: left;
    font-weight: normal;
}


@media (max-width: 768px) {
    .guarantee-info {
        margin-top: 70px;
    }

    .big-title {
        font-size: 24px;
        line-height: 37.5px;
    }

    .large-text {
        font-size: 16px;
        line-height: 18.75px;
    }

    .small-text {
        font-size: 16px;
        line-height: 18.75px;
    }

    .bigger {
        font-size: 16px;
    }

    .toggle-list {
        font-size: 16px;
        padding: 15px 20px;
    }

    .purchase-button {
        width: auto;
        height: 48px;
    }
}

@media (min-width: 768px) and (max-width: 1440px) {
    .guarantee-info {
        margin-top: 50px;
    }

    .big-title {
        font-size: 35px;
        line-height: 42px;
    }

    .large-text {
        font-size: 1.2rem;
        line-height: 1.4;
    }

    .small-text {
        font-size: 1rem;
        line-height: 1.4;
    }

    .bigger {
        font-size: 1.4rem;
    }

    .toggle-list {
        font-size: 20px;
        line-height: 23.44px;
        padding: 18px 30px;
    }

    .purchase-button {
        width: 160px;
        height: 52px;
    }
}
</style>

<!-- помоги сделать адаптив для ноутбука, планшета и телефона
@media (min-width: 768px) and (max-width: 1440px)
@media (min-width: 1440px)
@media (max-width: 768px) -->