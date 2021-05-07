const header = kintone.app.getHeaderMenuSpaceElement();
const button = new Kuc.Button({
    text: 'Submit',
    type: 'submit',
    className: 'options-class',
    id: 'options-id',
    visible: true,
    disabled: false
});
header.appendChild(button);

// add Event
button.addEventListener('click', event => console.log(event));
