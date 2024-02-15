export const selectChild = (
    e: React.MouseEvent<HTMLDivElement>,
    set: React.Dispatch<React.SetStateAction<number>>
) => {
    const idChild = parseInt(e.currentTarget.dataset.id!);
    const children = document.querySelectorAll('.child');
    children.forEach(child => child.classList.remove('selectedChild'));
    children[idChild-1].classList.add('selectedChild');
    set(idChild-1);
}