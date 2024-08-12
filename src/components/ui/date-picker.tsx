'use client'

import * as React from 'react'
import { DayPicker, ModifiersStyles } from 'react-day-picker'

import { cn } from '@/lib/utils'
import 'react-day-picker/style.css'

export type DatePickerProps = React.ComponentProps<typeof DayPicker>

function DatePicker({
  className,
  showOutsideDays = true,
  ...props
}: DatePickerProps) {
  const modifiersStyles: ModifiersStyles = {
    today: { color: '#FFF', fontWeight: 'bold' },
    selected: {
      background: '#BEF264',
      color: '#000000',
      borderRadius: 8,
    },
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      modifiersStyles={modifiersStyles}
      classNames={{
        day_button: 'rounded-xl',
        range_middle: 'bg-transparent',
      }}
      {...props}
    />
  )
}
DatePicker.displayName = 'DatePicker'

export { DatePicker }
