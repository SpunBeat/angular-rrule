import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RRule, Weekday, Frequency } from 'rrule';

export interface RRuleValue {
  freq: Frequency;
  byweekday: Weekday[];
}

@Component({
  selector: 'app-rrule',
  templateUrl: './rrule.component.html',
  styleUrls: ['./rrule.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RruleComponent,
      multi: true
    }
  ]
})
export class RruleComponent implements OnInit, ControlValueAccessor {

  @Input() frequencyAvailable: boolean;

  rruleForm: FormGroup;

  frequencyList = [
    {
      title: 'Yearly',
      plural: 'years',
      value: RRule.YEARLY
    },
    {
      title: 'Monthly',
      plural: 'months',
      value: RRule.MONTHLY
    },
    {
      title: 'Weekly',
      plural: 'weeks',
      value: RRule.WEEKLY
    },
    {
      title: 'Daily',
      plural: 'days',
      value: RRule.DAILY
    },
    {
      title: 'Hourly',
      plural: 'hours',
      value: RRule.HOURLY
    },
    {
      title: 'Minutely',
      plural: 'minutes',
      value: RRule.MINUTELY
    },
    {
      title: 'Secondly',
      plural: 'seconds',
      value: RRule.SECONDLY
    }
  ]

  weekdayList = [
    {
      title: 'Monday',
      value: RRule.MO
    },
    {
      title: 'Tuesday',
      value: RRule.TU
    },
    {
      title: 'Wednesday',
      value: RRule.WE
    },
    {
      title: 'Thursday',
      value: RRule.TH
    },
    {
      title: 'Friday',
      value: RRule.FR
    },
    {
      title: 'Saturday',
      value: RRule.SA
    },
    {
      title: 'Sunday',
      value: RRule.SU
    }
  ];

  constructor(
    private fb: FormBuilder,
    public elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.rruleForm = this.fb.group({
      freq: [null, Validators.required],
      dtstart: null,
      interval: null,
      wkst: null,
      count: null,
      until: null,
      tzid: null,
      bysetpos: null,
      bymonth: null,
      bymonthday: null,
      byyearday: null,
      byweekno: null,
      byweekday: null,
      byhour: null,
      byminute: null,
      bysecond: null,
      byeaster: null
    });
    this.rruleForm.valueChanges.subscribe(data => this.change(data));
  }

  compare(c1: {weekday: number}, c2: {weekday: number}) {
    return c1 && c2 && c1.weekday === c2.weekday;
  }

  change(value: RRuleValue) {
    this.onChange(value);
  }

  onChange = (delta: any) => {};

  writeValue(value: RRuleValue): void {
    this.rruleForm.patchValue({ byweekday: value.byweekday, freq: value.freq })
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {
    /* this.matSelect.setDisabledState(isDisabled); */
  }
}
