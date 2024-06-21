<script setup>
import { useCounterStore } from "@/stores/AppleStore";
import { computed, ref, watchEffect } from "vue";

const appleStore = useCounterStore()
// define component props for the slider component
const { min, max, step, minValue, maxValue, target } = defineProps({
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    step: {
        type: Number,
        default: 100,
    },
    minValue: {
        type: Number,
        default: 50,
    },
    maxValue: {
        type: Number,
        default: 80,
    },
    target: {
        type: String,
        default: 'price'
    }
});

// define emits for the slider component
const emit = defineEmits(["update:minValue", "update:maxValue"]);

// define refs for the slider element and the slider values
const slider = ref(null);
const inputMin = ref(null);
const inputMax = ref(null);
const sliderMinValue = ref(minValue);
const sliderMaxValue = ref(maxValue);
let sliderStep = ref(step)
const targetVal = ref(target)

// function to get the percentage of a value between the min and max values
const getPercent = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
};

// function to get the difference between the min and max values
const sliderDifference = computed(() => {
    return Math.abs(sliderMaxValue.value - sliderMinValue.value);
});

// function to set the css variables for width, left and right
const setCSSProps = (left, right) => {
    slider.value.style.setProperty("--progressLeft", `${left}%`);
    slider.value.style.setProperty("--progressRight", `${right}%`);
};

const totalFilters = localStorage.getItem('totalFilters')
// watchEffect to emit the updated values, and update the css variables
// when the slider values change
watchEffect(() => {
    if (slider.value) {
        // emit slidet values when updated
        emit("update:minValue", sliderMinValue.value);
        emit("update:maxValue", sliderMaxValue.value);

        // calculate values in percentages
        let leftPercent = 0
        let rightPercent = 100
        if( targetVal.value == 'price'){
            leftPercent = getPercent(sliderMinValue.value, 6500, 198999);
            rightPercent = 100 - getPercent(sliderMaxValue.value, 6500, 198999);
            sliderStep.value = 100
        } else if (targetVal.value == 'diag'){
            leftPercent = getPercent(sliderMinValue.value, 0, 15);
            rightPercent = 100 - getPercent(sliderMaxValue.value, 0, 15);
            sliderStep.value = 0.1
        }
        else if (targetVal.value == 'diag_smmartpads'){
            leftPercent = getPercent(sliderMinValue.value, 0, 15);
            rightPercent = 100 - getPercent(sliderMaxValue.value, 0, 15);
            sliderStep.value = 0.05
        }


        // set the CSS variables
        setCSSProps(leftPercent, rightPercent);
    }
});

// validation sliderMinValue do not greater than sliderMaxValue and opposite
const onInput = ({ target }) => {
    if (target.name === 'min') {
        target.value > sliderMaxValue.value
            ? target.value = sliderMaxValue.value
            : sliderMinValue.value = parseFloat(target.value);
            if (targetVal.value == 'price'){
                appleStore.sortByPrice(sliderMinValue.value, sliderMaxValue.value)
            } else if (targetVal.value == 'diag_smmartpads' || targetVal.value == 'diag'){
                appleStore.sortByDiag(sliderMinValue.value, sliderMaxValue.value)
                console.log(sliderMinValue.value)
            }


    }

    if (target.name === 'max') {
        target.value < sliderMinValue.value
            ? target.value = sliderMinValue.value
            : sliderMaxValue.value = parseFloat(target.value);
            if (targetVal.value == 'price'){
                appleStore.sortByPrice(sliderMinValue.value, sliderMaxValue.value)
            } else if (targetVal.value == 'diag_smmartpads' || targetVal.value == 'diag'){
                appleStore.sortByDiag(sliderMinValue.value, sliderMaxValue.value)
                console.log(sliderMaxValue.value)
            }

    }
};

</script>
<template>
    <div ref="slider" class="custom-slider minmax">
        <div class="minmax-indicator"></div>
        <input ref="inputMin" type="range" name="min" id="min" :min="min" :max="max" :value="minValue" :step="sliderStep"
            @input="onInput" />
        <input ref="inputMax" type="range" name="max" id="max" :min="min" :max="max" :value="maxValue" :step="sliderStep"
            @input="onInput" />
    </div>
</template>

<style>
.slider-cont {
    width: 300px;
}

.custom-slider {
    --trackHeight: 6px;
    /* --thumbRadius: 1rem; */
    --thumbRadius: 0.5rem;
}

/* style the input element with type "range" */
.custom-slider input[type="range"] {
    position: relative;
    appearance: none;
    background: none;
    border-radius: 999px;
    z-index: 0;
    height: 100%;
    pointer-events: none;
}

/* ::before element to replace the slider track */
.custom-slider input[type="range"]::before {
    content: "";
    display: block;
    position: absolute;
    width: var(--ProgressPercent, 100%);
    height: 100%;
    background: #0071E4;
    border-radius: 999px;
}

/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrome and safari browsers. */
.custom-slider input[type="range"]::-webkit-slider-runnable-track {
    appearance: none;
    background: #FFFFFF;
    height: var(--trackHeight);
    border-radius: 999px;
}

.custom-slider input[type="range"]::-webkit-slider-thumb {
    position: relative;
    width: 24px;
    height: 24px;
    top: -10px;
    margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
    background: #0071E4;
    border: 1px solid #0071E4;
    border-radius: 999px;
    pointer-events: all;
    appearance: none;
    z-index: 1;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.custom-slider.default input[type="range"]::-moz-range-track {
    appearance: none;
    background: #FFF;
    border: 1px solid #E7E7E7;
    height: var(--trackHeight);
    border-radius: 999px;
}

.custom-slider input[type="range"]::-moz-range-thumb {
    position: relative;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
    background: #0071E4;
    border: 1px solid #0071E4;
    border-radius: 999px;
    pointer-events: all;
    appearance: none;
    z-index: 1;
}

.custom-slider.minmax {
    position: relative;
    height: var(--trackHeight);
    background: #FFF;
    border: 1px solid #E7E7E7;
    border-radius: 999px;
    margin: 1.5rem 0;
    --progressLeft: 0%;
    --progressRight: 0%;
}

.custom-slider .minmax-indicator {
    position: absolute;
    height: 125%;
    pointer-events: none;
    left: var(--thumbRadius);
    right: var(--thumbRadius);
    top: -1px;
}

.custom-slider .minmax-indicator::before {
    content: "";
    position: absolute;
    background: #0071E4;
    height: 125%;
    left: var(--progressLeft);
    right: var(--progressRight);
}

.custom-slider.minmax input[type="range"] {
    position: absolute;
    width: calc(100% - var(--thumbRadius));
}

.custom-slider.minmax input[type="range"][name="max"] {
    left: var(--thumbRadius);
}

.custom-slider.minmax input[type="range"]::-webkit-slider-runnable-track {
    background: none;
}

.custom-slider.minmax input[type="range"]::before {
    display: none;
}

.minmax-inputs {
    display: flex;
    justify-content: space-between;
}

.minmax-inputs input {
    width: 50px;
}
</style>