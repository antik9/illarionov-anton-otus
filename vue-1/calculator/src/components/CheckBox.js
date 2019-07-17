import Vue from 'vue';

let CheckBoxApp  = Vue.component('checkbox-app', {
    props: ['label', 'checked'],
    render(createElement) {
        return createElement('div', [
            createElement('input', {
                attrs: {
                    id: `checkbox-${this.label}`,
                    type: 'checkbox',
                    checked: this.checked,
                }
            }),
            createElement('label', {
                attrs: {
                    for: `checkbox-${this.label}`,
                }
            }, this.label)
        ])
    }
})

export default CheckBoxApp;
