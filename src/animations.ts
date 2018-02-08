import { transition, style, animate, trigger } from '@angular/animations';

export const fadeUp = trigger('fadeUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20%)' }),
    animate('350ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateY(0)' }),
    animate('150ms ease', style({ opacity: 0, transform: 'translateY(20%)' }))
  ])
]);

export const growDown = trigger('growDown', [
  transition(':enter', [
    style({ height: 0, overflow: 'hidden', padding: '0 *', margin: '0 *' }),
    animate('350ms ease', style({ height: '*', padding: '* *', margin: '* *' }))
  ]),
  transition(':leave', [
    style({ height: '*', overflow: 'hidden', padding: '* *', margin: '* *' }),
    animate('350ms ease', style({ height: 0, padding: '0 *', margin: '0 *' }))
  ])
]);
