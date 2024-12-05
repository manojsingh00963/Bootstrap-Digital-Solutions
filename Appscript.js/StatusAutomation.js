function onEdit(e) {
    if (!e) return; 
    const sheet = e.source.getActiveSheet();
    const range = e.range;
    if (range.getColumn() === 3) {
        const age = range.getValue(); 
        const statusCell = range.offset(0, 1); 
        if (age >= 60) {
            statusCell.setValue('Senior');
        } else if (age < 60) {
            statusCell.setValue('Junior');
        } else {
            statusCell.setValue('');
        }
    }
}
