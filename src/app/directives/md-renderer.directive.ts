import { Directive, ElementRef, Input, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { Converter } from 'showdown';

@Directive({
  selector: '[nrMdRenderer]'
})
export class MdRendererDirective implements OnChanges {

  @Input()
  nrMdRenderer: string;

  converter: Converter;

  @HostBinding('class.md-rendered')
  renderClass = true;

  constructor(private elementRef: ElementRef) {
    this.converter = new Converter({
      ghCompatibleHeaderId: true
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.nrMdRenderer.currentValue) {
      this.elementRef.nativeElement.innerHTML = this.converter.makeHtml(changes.nrMdRenderer.currentValue);
      const pres = document.getElementsByTagName('pre');
      for (let i = 0; i < pres.length; i++) {
        (window['hljs']).highlightBlock(pres[i]);
      }
    }
  }

}
