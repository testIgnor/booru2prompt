function switch_to_select() {
    gradioApp().querySelectorAll('#tab_b2p_interface')[0].querySelectorAll('button')[0].click();
    
    gradioApp().querySelector('#selectbox').querySelector('textarea').value = gradioApp().querySelector('div.caption.svelte-g4rw9')?.innerHTML;

    return gradioApp().querySelector('div.caption.svelte-g4rw9')?.innerHTML

}