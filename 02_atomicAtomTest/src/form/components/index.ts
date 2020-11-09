import {button, checkBox, container, getData, input, radioButton, select, textarea, text} from 'atomicatom';
import { gender, interested, skill } from '../constants';

const PARENT_CONTAINER = ['myForm'];
const CHILD_CONTAINER = ['myForm__title', 'myForm__form', 'myForm__button', 'myForm__explain'];

export function containers() {
    container({
        type: 'div',
        parent: 'body',        
        container: PARENT_CONTAINER
    });
    
    container({
        type: 'div',
        parent: '.myForm',        
        container: CHILD_CONTAINER
    });
}


export function title() {
    text({
        parent: '.myForm__title',
        className: 'myForm__text',
        title: 'Atomicatom Example', 
        type: 'h1',
        events: {}
    });
}

export function fullName() {
    text({
        parent: '.myForm__form',
        className: 'myForm__label',
        title: 'Full name', 
        type: 'label',
        events: {}
    });

    input({
        parent: '.myForm__form',
        className: 'myForm__name',
        atomicName: 'name',
        type:'text',
        value:'',
        placeholder:'Your name', 
        events: {}
    });
}

export function genderRadio() {
    text({
        parent: '.myForm__form',
        className: 'myForm__label',
        title: 'Gender', 
        type: 'label',
        events: {}
    });

    radioButton({
        parent: '.myForm__form',
        className: 'myForm__gender',
        atomicName: 'gender',
        list: gender,
        events: {}
    });
}

export function description() {
    text({
        parent: '.myForm__form',
        className: 'myForm__label',
        title: 'Description', 
        type: 'label',
        events: {}
    });

    textarea({
        parent: '.myForm__form',
        className: 'myForm__description',
        atomicName: 'description',
        value:'',
        placeholder:'Description', 
        events: {}
    });
}


export function intersted() {
    text({
        parent: '.myForm__form',
        className: 'myForm__label',
        title: 'Interested on', 
        type: 'label',
        events: {}
    });

    checkBox({
        parent: '.myForm__form',
        className: 'myForm__interested',
        atomicName: 'interested',
        list: interested, 
        events: {}
    });
}


export function skills() {
    text({
        parent: '.myForm__form',
        className: 'myForm__label',
        title: 'Skills', 
        type: 'label',
        events: {}
    });

    select({
        parent: '.myForm__form',
        className: 'myForm__skill',
        atomicName: 'skill',
        options: skill,
        events: {}
    });
}

export function submitBtn() {
    button({
        parent: '.myForm__button',
        className: 'myForm__btn',
        atomicName: 'button',
        text: 'Subscribe',
        events: { click: () => console.log(getData()) }
    }) 
}

export function explain() {
    text({
        parent: '.myForm__explain',
        className: 'myForm__explainText',
        title: '*When click on submit button, open your console to veiw data', 
        type: 'small',
        events: {}
    });
}