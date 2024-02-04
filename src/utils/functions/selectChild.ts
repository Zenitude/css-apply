export const selectChild = (
    e: React.MouseEvent<HTMLDivElement>,
    set: React.Dispatch<React.SetStateAction<number>>
) => {
    const idChild = parseInt(e.currentTarget.dataset.id!);
    set(idChild-1);
}