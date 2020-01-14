import BaseUpdater from './BaseUpdater.js';
import RowUpdater from './RowUpdater.js';

class PageUpdater extends BaseUpdater {
    constructor(config) {
        super(config);
    }

    startUpdate() {
        this.rootRef.on('child_added', this.addPage, this);
        this.rootRef.on('child_removed', this.removePage, this);
    }

    stopUpdate() {
        this.rootRef.off('child_added', this.addPage, this);
        this.rootRef.off('child_removed', this.removePage, this);
    }

    addPage(snapshot) {
        var key = snapshot.key,
            value = snapshot.val();
        this.setData(key, value);

        this.emit(this.eventNames.addkey0, key, value);
    }

    removePage(snapshot) {
        var key = snapshot.key;
        this.removeChild(key);

        this.emit(this.eventNames.removekey0, key);
    }

    get childClass() {
        return RowUpdater;
    }
}

export default PageUpdater;