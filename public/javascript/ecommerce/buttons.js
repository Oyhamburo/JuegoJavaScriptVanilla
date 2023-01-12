import { move,moveUp,moveDown,moveRigth,moveLeft,printDetailsItem,removeEcommerce } from "./index.js";
const buttonsEcommerce = (items) => {
    move()
    printDetailsItem(items)
    window.addEventListener('keyup', (e) => {
        switch (e.key) {
            case 'w': moveUp();printDetailsItem(items); break
            case 's': moveDown();printDetailsItem(items); break
            case 'a': moveLeft();printDetailsItem(items); break
            case 'd': moveRigth();printDetailsItem(items); break
            case 'e': activeOption(); break
            case 'Escape': removeEcommerce(); break
        }
    })
}
export { buttonsEcommerce }