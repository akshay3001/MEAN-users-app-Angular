import { MatButtonModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule],
    exports: [MatButtonModule, MatFormFieldModule]
})

export class MaterialModule { }
