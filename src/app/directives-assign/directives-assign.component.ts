import { Component } from '@angular/core';

@Component({
    templateUrl: './directives-assign.component.html',
    selector: 'app-directives-assign',
    styles: [`
        .changes {
            color: white;
        }
    `]
})
export class DirectivesAssignComponent {
    displayToggle: boolean;
    logCount: number;
    logEntries = [];

    constructor () {
        this.displayToggle = true;
        this.logCount = 0;

    }

    addLogEntry() {
        this.displayToggle = this.displayToggle? false : true;
        this.logEntries.push(this.logCount + 1);
        this.logCount ++;
    }

}