import React, { forwardRef } from 'react'
import { oneOf } from 'prop-types'
import styled from 'styled-components'
import { space, color, layout, flexbox, border, position } from 'styled-system'

import theme from '../theme'

const IconBase = styled.svg`
  ${position}
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
`

export const IconSuccess = forwardRef((props, ref) => (
  <IconBase
    ref={ref}
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <mask id='path-2-inside-1' fill='white'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.51379 11.4678L6.06942 7.43259C5.9136 7.25004 6.04333 6.96875 6.28334 6.96875L13.706 6.96875C13.9461 6.96875 14.0758 7.25004 13.92 7.43259L10.474 11.4697L13.9184 15.5049C14.0742 15.6875 13.9445 15.9688 13.7045 15.9688H6.28179C6.04178 15.9688 5.91205 15.6875 6.06787 15.5049L9.51379 11.4678Z'
      />
    </mask>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.51379 11.4678L6.06942 7.43259C5.9136 7.25004 6.04333 6.96875 6.28334 6.96875L13.706 6.96875C13.9461 6.96875 14.0758 7.25004 13.92 7.43259L10.474 11.4697L13.9184 15.5049C14.0742 15.6875 13.9445 15.9688 13.7045 15.9688H6.28179C6.04178 15.9688 5.91205 15.6875 6.06787 15.5049L9.51379 11.4678Z'
      fill='#FDB221'
    />
    <path
      d='M9.51379 11.4678L10.3695 12.1982L10.9929 11.4678L10.3695 10.7375L9.51379 11.4678ZM6.06942 7.43259L6.9251 6.70222L6.9251 6.70222L6.06942 7.43259ZM6.28334 6.96875L6.28334 5.84375H6.28334V6.96875ZM13.706 6.96875L13.706 8.09375H13.706V6.96875ZM13.92 7.43259L13.0643 6.70222L13.0643 6.70222L13.92 7.43259ZM10.474 11.4697L9.61838 10.7393L8.99495 11.4697L9.61838 12.2L10.474 11.4697ZM13.9184 15.5049L13.0627 16.2353L13.0627 16.2353L13.9184 15.5049ZM6.06787 15.5049L5.2122 14.7745L5.2122 14.7745L6.06787 15.5049ZM10.3695 10.7375L6.9251 6.70222L5.21375 8.16297L8.65811 12.1982L10.3695 10.7375ZM6.9251 6.70222C7.39257 7.24988 7.00338 8.09375 6.28334 8.09375V5.84375C5.08327 5.84375 4.43464 7.2502 5.21375 8.16297L6.9251 6.70222ZM6.28334 8.09375L13.706 8.09375L13.706 5.84375L6.28334 5.84375L6.28334 8.09375ZM13.706 8.09375C12.986 8.09375 12.5968 7.24988 13.0643 6.70222L14.7756 8.16297C15.5547 7.2502 14.9061 5.84375 13.706 5.84375V8.09375ZM13.0643 6.70222L9.61838 10.7393L11.3297 12.2L14.7756 8.16297L13.0643 6.70222ZM9.61838 12.2L13.0627 16.2353L14.7741 14.7745L11.3297 10.7393L9.61838 12.2ZM13.0627 16.2353C12.5953 15.6876 12.9844 14.8438 13.7045 14.8438V17.0938C14.9046 17.0938 15.5532 15.6873 14.7741 14.7745L13.0627 16.2353ZM13.7045 14.8438H6.28179V17.0938H13.7045V14.8438ZM6.28179 14.8438C7.00184 14.8438 7.39101 15.6876 6.92355 16.2353L5.2122 14.7745C4.43309 15.6873 5.08172 17.0938 6.28179 17.0938V14.8438ZM6.92355 16.2353L10.3695 12.1982L8.65811 10.7375L5.2122 14.7745L6.92355 16.2353Z'
      fill='#000'
      mask='url(#path-2-inside-1)'
    />
    <rect y='0.962891' width='24' height='24' rx='12' fill='#444444' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.7296 9.25774C18.0901 9.64826 18.0901 10.2814 17.7296 10.672L11.2681 17.672C10.9076 18.0625 10.3232 18.0625 9.96267 17.672L6.27036 13.672C5.90988 13.2814 5.90988 12.6483 6.27036 12.2577C6.63085 11.8672 7.21531 11.8672 7.57579 12.2577L10.6154 15.5506L16.4242 9.25774C16.7847 8.86721 17.3692 8.86721 17.7296 9.25774Z'
      fill='white'
    />
  </IconBase>
))

export const IconFail = forwardRef((props, ref) => (
  <IconBase
    ref={ref}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='12' cy='12' r='12' fill='#E63838' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.29489 15.2921C6.90442 15.6826 6.90442 16.3157 7.29489 16.7062C7.68535 17.0966 8.31842 17.0966 8.70888 16.7062L11.9994 13.4155L15.2916 16.7079C15.6821 17.0984 16.3151 17.0984 16.7056 16.7079C17.0961 16.3174 17.0961 15.6843 16.7056 15.2938L13.4134 12.0014L16.7076 8.70694C17.0981 8.31645 17.0981 7.68335 16.7076 7.29286C16.3172 6.90238 15.6841 6.90238 15.2937 7.29286L11.9994 10.5873L8.70684 7.29462C8.31638 6.90413 7.68331 6.90413 7.29285 7.29462C6.90238 7.68511 6.90238 8.31821 7.29285 8.7087L10.5854 12.0014L7.29489 15.2921Z'
      fill='white'
    />
  </IconBase>
))

export const IconPending = forwardRef((props, ref) => (
  <IconBase
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <circle cx='12' cy='12' r='12' fill='#FDB221' />
    <mask id='path-3-inside-1' fill='white'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.3829 12.0007L7.11498 6.81784C6.84637 6.49165 7.0784 6 7.50095 6H16.499C16.9215 6 17.1535 6.49165 16.8849 6.81784L12.6181 11.9993L16.886 17.1822C17.1546 17.5083 16.9226 18 16.5 18H7.50203C7.07947 18 6.84744 17.5083 7.11605 17.1822L11.3829 12.0007Z'
      />
    </mask>
    <path
      fillRule='evenodd'
      clipule='evenodd'
      d='M11.3829 12.0007L7.11498 6.81784C6.84637 6.49165 7.0784 6 7.50095 6H16.499C16.9215 6 17.1535 6.49165 16.8849 6.81784L12.6181 11.9993L16.886 17.1822C17.1546 17.5083 16.9226 18 16.5 18H7.50203C7.07947 18 6.84744 17.5083 7.11605 17.1822L11.3829 12.0007Z'
      fill='#FDB221'
    />
    <path
      d='M11.3829 12.0007L12.618 13.0177L13.4556 12.0007L12.618 10.9836L11.3829 12.0007ZM7.11498 6.81784L8.3501 5.80075L7.11498 6.81784ZM16.8849 6.81784L15.6498 5.80075L15.6498 5.80075L16.8849 6.81784ZM12.6181 11.9993L11.383 10.9823L10.5454 11.9993L11.383 13.0164L12.6181 11.9993ZM16.886 17.1822L18.1211 16.1651L18.1211 16.1651L16.886 17.1822ZM7.11605 17.1822L8.35117 18.1993L8.35117 18.1993L7.11605 17.1822ZM12.618 10.9836L8.3501 5.80075L5.87985 7.83493L10.1478 13.0177L12.618 10.9836ZM8.3501 5.80075C8.94104 6.51837 8.43056 7.6 7.50095 7.6V4.4C5.72624 4.4 4.7517 6.46493 5.87985 7.83493L8.3501 5.80075ZM7.50095 7.6H16.499V4.4H7.50095V7.6ZM16.499 7.6C15.5693 7.6 15.0589 6.51836 15.6498 5.80075L18.1201 7.83493C19.2482 6.46494 18.2737 4.4 16.499 4.4V7.6ZM15.6498 5.80075L11.383 10.9823L13.8532 13.0164L18.1201 7.83493L15.6498 5.80075ZM11.383 13.0164L15.6509 18.1993L18.1211 16.1651L13.8532 10.9823L11.383 13.0164ZM15.6509 18.1993C15.0599 17.4816 15.5704 16.4 16.5 16.4V19.6C18.2748 19.6 19.2493 17.5351 18.1211 16.1651L15.6509 18.1993ZM16.5 16.4H7.50203V19.6H16.5V16.4ZM7.50203 16.4C8.43164 16.4 8.94211 17.4816 8.35117 18.1993L5.88093 16.1651C4.75278 17.5351 5.7273 19.6 7.50203 19.6V16.4ZM8.35117 18.1993L12.618 13.0177L10.1478 10.9836L5.88093 16.1651L8.35117 18.1993Z'
      fill='white'
      mask='url(#path-3-inside-1)'
    />
  </IconBase>
))

export const IconSend = forwardRef((props, ref) => (
  <IconBase
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <mask id='path-2-inside-1' fill='white'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.51379 11.4678L6.06942 7.43259C5.9136 7.25004 6.04333 6.96875 6.28334 6.96875H13.706C13.9461 6.96875 14.0758 7.25004 13.92 7.43259L10.4741 11.4697L13.9184 15.5049C14.0742 15.6875 13.9445 15.9688 13.7045 15.9688H6.28179C6.04178 15.9688 5.91205 15.6875 6.06787 15.5049L9.51379 11.4678Z'
      />
    </mask>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.51379 11.4678L6.06942 7.43259C5.9136 7.25004 6.04333 6.96875 6.28334 6.96875H13.706C13.9461 6.96875 14.0758 7.25004 13.92 7.43259L10.4741 11.4697L13.9184 15.5049C14.0742 15.6875 13.9445 15.9688 13.7045 15.9688H6.28179C6.04178 15.9688 5.91205 15.6875 6.06787 15.5049L9.51379 11.4678Z'
      fill='#FDB221'
    />
    <path
      d='M9.51379 11.4678L10.3695 12.1982L10.9929 11.4678L10.3695 10.7375L9.51379 11.4678ZM6.06942 7.43259L6.9251 6.70222L6.06942 7.43259ZM13.92 7.43259L13.0643 6.70222L13.0643 6.70222L13.92 7.43259ZM10.4741 11.4697L9.61838 10.7393L8.99495 11.4697L9.61838 12.2L10.4741 11.4697ZM13.9184 15.5049L13.0627 16.2353L13.0627 16.2353L13.9184 15.5049ZM6.06787 15.5049L5.2122 14.7745L5.2122 14.7745L6.06787 15.5049ZM10.3695 10.7375L6.9251 6.70222L5.21375 8.16297L8.65811 12.1982L10.3695 10.7375ZM6.9251 6.70222C7.39257 7.24988 7.00339 8.09375 6.28334 8.09375V5.84375C5.08327 5.84375 4.43464 7.2502 5.21375 8.16297L6.9251 6.70222ZM6.28334 8.09375H13.706V5.84375H6.28334V8.09375ZM13.706 8.09375C12.986 8.09375 12.5968 7.24988 13.0643 6.70222L14.7756 8.16297C15.5547 7.2502 14.9061 5.84375 13.706 5.84375V8.09375ZM13.0643 6.70222L9.61838 10.7393L11.3297 12.2L14.7756 8.16297L13.0643 6.70222ZM9.61838 12.2L13.0627 16.2353L14.7741 14.7745L11.3297 10.7393L9.61838 12.2ZM13.0627 16.2353C12.5953 15.6876 12.9845 14.8438 13.7045 14.8438V17.0938C14.9046 17.0938 15.5532 15.6873 14.7741 14.7745L13.0627 16.2353ZM13.7045 14.8438H6.28179V17.0938H13.7045V14.8438ZM6.28179 14.8438C7.00184 14.8438 7.39101 15.6876 6.92355 16.2353L5.2122 14.7745C4.43309 15.6873 5.08172 17.0938 6.28179 17.0938V14.8438ZM6.92355 16.2353L10.3695 12.1982L8.65811 10.7375L5.2122 14.7745L6.92355 16.2353Z'
      fill='#444444'
      mask='url(#path-2-inside-1)'
    />
    <rect
      y='0.962891'
      width='24'
      height='24'
      rx='12'
      fill={
        props.status === 'confirmed'
          ? theme.colors.status.success.background
          : theme.colors.status.pending.background
      }
    />
    <path
      d='M12.5657 7.43431C12.2533 7.12189 11.7467 7.12189 11.4343 7.43431L6.34315 12.5255C6.03073 12.8379 6.03073 13.3444 6.34315 13.6569C6.65556 13.9693 7.1621 13.9693 7.47452 13.6569L12 9.13137L16.5255 13.6569C16.8379 13.9693 17.3444 13.9693 17.6569 13.6569C17.9693 13.3444 17.9693 12.8379 17.6569 12.5255L12.5657 7.43431ZM12.8 18L12.8 8L11.2 8L11.2 18L12.8 18Z'
      fill='#F6F8FE'
    />
  </IconBase>
))

IconSend.propTypes = {
  status: oneOf(['confirmed', 'pending']).isRequired
}

export const IconReceive = forwardRef((props, ref) => (
  <IconBase
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <mask id='path-2-inside-1' fill='white'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.51379 11.4678L6.06942 7.43259C5.9136 7.25004 6.04333 6.96875 6.28334 6.96875H13.706C13.9461 6.96875 14.0758 7.25004 13.92 7.43259L10.4741 11.4697L13.9184 15.5049C14.0742 15.6875 13.9445 15.9688 13.7045 15.9688H6.28179C6.04178 15.9688 5.91205 15.6875 6.06787 15.5049L9.51379 11.4678Z'
      />
    </mask>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.51379 11.4678L6.06942 7.43259C5.9136 7.25004 6.04333 6.96875 6.28334 6.96875H13.706C13.9461 6.96875 14.0758 7.25004 13.92 7.43259L10.4741 11.4697L13.9184 15.5049C14.0742 15.6875 13.9445 15.9688 13.7045 15.9688H6.28179C6.04178 15.9688 5.91205 15.6875 6.06787 15.5049L9.51379 11.4678Z'
      fill='#FDB221'
    />
    <path
      d='M9.51379 11.4678L10.3695 12.1982L10.9929 11.4678L10.3695 10.7375L9.51379 11.4678ZM6.06942 7.43259L6.9251 6.70222L6.06942 7.43259ZM13.92 7.43259L13.0643 6.70222L13.0643 6.70222L13.92 7.43259ZM10.4741 11.4697L9.61838 10.7393L8.99495 11.4697L9.61838 12.2L10.4741 11.4697ZM13.9184 15.5049L13.0627 16.2353L13.0627 16.2353L13.9184 15.5049ZM6.06787 15.5049L5.2122 14.7745L5.2122 14.7745L6.06787 15.5049ZM10.3695 10.7375L6.9251 6.70222L5.21375 8.16297L8.65811 12.1982L10.3695 10.7375ZM6.9251 6.70222C7.39257 7.24988 7.00339 8.09375 6.28334 8.09375V5.84375C5.08327 5.84375 4.43464 7.2502 5.21375 8.16297L6.9251 6.70222ZM6.28334 8.09375H13.706V5.84375H6.28334V8.09375ZM13.706 8.09375C12.986 8.09375 12.5968 7.24988 13.0643 6.70222L14.7756 8.16297C15.5547 7.2502 14.9061 5.84375 13.706 5.84375V8.09375ZM13.0643 6.70222L9.61838 10.7393L11.3297 12.2L14.7756 8.16297L13.0643 6.70222ZM9.61838 12.2L13.0627 16.2353L14.7741 14.7745L11.3297 10.7393L9.61838 12.2ZM13.0627 16.2353C12.5953 15.6876 12.9845 14.8438 13.7045 14.8438V17.0938C14.9046 17.0938 15.5532 15.6873 14.7741 14.7745L13.0627 16.2353ZM13.7045 14.8438H6.28179V17.0938H13.7045V14.8438ZM6.28179 14.8438C7.00184 14.8438 7.39101 15.6876 6.92355 16.2353L5.2122 14.7745C4.43309 15.6873 5.08172 17.0938 6.28179 17.0938V14.8438ZM6.92355 16.2353L10.3695 12.1982L8.65811 10.7375L5.2122 14.7745L6.92355 16.2353Z'
      fill='#444444'
      mask='url(#path-2-inside-1)'
    />
    <rect
      y='0.962891'
      width='24'
      height='24'
      rx='12'
      fill={
        props.status === 'confirmed'
          ? theme.colors.status.success.background
          : theme.colors.status.pending.background
      }
    />
    <path
      d='M11.4343 18.5657C11.7467 18.8781 12.2533 18.8781 12.5657 18.5657L17.6569 13.4745C17.9693 13.1621 17.9693 12.6556 17.6569 12.3431C17.3444 12.0307 16.8379 12.0307 16.5255 12.3431L12 16.8686L7.47452 12.3431C7.1621 12.0307 6.65556 12.0307 6.34314 12.3431C6.03073 12.6556 6.03073 13.1621 6.34314 13.4745L11.4343 18.5657ZM11.2 8V18H12.8V8H11.2Z'
      fill='#F6F8FE'
    />
  </IconBase>
))

IconReceive.propTypes = {
  status: oneOf(['confirmed', 'pending']).isRequired
}

export const IconClose = forwardRef((props, ref) => (
  <IconBase
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.7333 4.2669C19.3776 3.91103 18.801 3.91103 18.4453 4.2669L11.9994 10.7166L5.55552 4.26885C5.19986 3.91299 4.62323 3.91299 4.26757 4.26885C3.91191 4.62472 3.91191 5.20169 4.26757 5.55756L10.7115 12.0053L4.27793 18.4426C3.92228 18.7985 3.92228 19.3755 4.27793 19.7313C4.63359 20.0872 5.21022 20.0872 5.56587 19.7313L11.9994 13.294L18.435 19.7333C18.7906 20.0892 19.3672 20.0892 19.7229 19.7333C20.0786 19.3774 20.0786 18.8005 19.7229 18.4446L13.2874 12.0053L19.7333 5.5556C20.0889 5.19974 20.0889 4.62276 19.7333 4.2669Z'
      fill={theme.colors.core.primary}
    />
  </IconBase>
))

export const IconApproximatelyEquals = forwardRef((props, ref) => (
  <IconBase
    width='24'
    height='24'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <path
      d='M3 12C3 7.02944 7.02944 3 12 3V3C16.9706 3 21 7.02944 21 12V12C21 16.9706 16.9706 21 12 21V21C7.02944 21 3 16.9706 3 12V12Z'
      fill='#F6F8FE'
    />
    <path
      d='M8.93342 11.6614C9.19742 11.0179 9.50267 10.56 9.84917 10.2877C10.1957 10.0072 10.5628 9.867 10.9505 9.867C11.2063 9.867 11.429 9.9165 11.6188 10.0155C11.8085 10.1145 11.9818 10.2217 12.1385 10.3372C12.3035 10.4527 12.4562 10.56 12.5964 10.659C12.7449 10.758 12.9058 10.8075 13.079 10.8075C13.2523 10.8075 13.4173 10.725 13.574 10.56C13.7308 10.395 13.8669 10.1392 13.9824 9.79275L15.0714 10.3001C14.8074 10.9436 14.5022 11.4056 14.1557 11.6861C13.8092 11.9584 13.442 12.0945 13.0543 12.0945C12.7985 12.0945 12.5758 12.045 12.386 11.946C12.1963 11.847 12.0189 11.7397 11.8539 11.6242C11.6972 11.5087 11.5445 11.4015 11.396 11.3025C11.2558 11.2035 11.099 11.154 10.9258 11.154C10.7608 11.154 10.5958 11.2365 10.4308 11.4015C10.274 11.5665 10.1379 11.8222 10.0224 12.1687L8.93342 11.6614ZM8.93342 14.52C9.19742 13.8765 9.50267 13.4186 9.84917 13.1464C10.1957 12.8659 10.5628 12.7256 10.9505 12.7256C11.2063 12.7256 11.429 12.7751 11.6188 12.8741C11.8085 12.9731 11.9818 13.0804 12.1385 13.1959C12.3035 13.3114 12.4562 13.4186 12.5964 13.5176C12.7449 13.6166 12.9058 13.6661 13.079 13.6661C13.2523 13.6661 13.4173 13.5836 13.574 13.4186C13.7308 13.2536 13.8669 12.9979 13.9824 12.6514L15.0714 13.1587C14.8074 13.8022 14.5022 14.2642 14.1557 14.5447C13.8092 14.817 13.442 14.9531 13.0543 14.9531C12.7985 14.9531 12.5758 14.9036 12.386 14.8046C12.1963 14.7056 12.0189 14.5984 11.8539 14.4829C11.6972 14.3674 11.5445 14.2601 11.396 14.1611C11.2558 14.0621 11.099 14.0126 10.9258 14.0126C10.7608 14.0126 10.5958 14.0951 10.4308 14.2601C10.274 14.4251 10.1379 14.6809 10.0224 15.0274L8.93342 14.52Z'
      fill='#333333'
    />
    <path
      d='M12 20.4375C7.3401 20.4375 3.5625 16.6599 3.5625 12H2.4375C2.4375 17.2812 6.71878 21.5625 12 21.5625V20.4375ZM20.4375 12C20.4375 16.6599 16.6599 20.4375 12 20.4375V21.5625C17.2812 21.5625 21.5625 17.2812 21.5625 12H20.4375ZM12 3.5625C16.6599 3.5625 20.4375 7.3401 20.4375 12H21.5625C21.5625 6.71878 17.2812 2.4375 12 2.4375V3.5625ZM12 2.4375C6.71878 2.4375 2.4375 6.71878 2.4375 12H3.5625C3.5625 7.3401 7.3401 3.5625 12 3.5625V2.4375Z'
      fill='#444444'
    />
  </IconBase>
))

export const IconCopyAccountAddress = forwardRef((props, ref) => (
  <IconBase
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <rect x='8' y='4' width='12' height='12' fill='#1A0066' />
    <rect x='4' y='8' width='12' height='12' fill='#E0D7FE' />
  </IconBase>
))

export const IconMessageStatus = forwardRef((props, ref) => (
  <IconBase
    width='24px'
    height='24px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <rect
      x='4'
      y='8'
      width='12'
      height='12'
      fill={
        props.status === 'confirmed'
          ? theme.colors.status.success.background
          : theme.colors.status.pending.background
      }
    />
  </IconBase>
))

IconMessageStatus.propTypes = {
  status: oneOf(['confirmed', 'pending']).isRequired
}

export const IconLedger = forwardRef((iconwidth, iconheight, props, ref) => (
  <IconBase
    width={iconwidth}
    height={iconheight}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.0934 4H17.4067H17.4148C18.8148 4 19.9676 5.15197 19.9676 6.55279V13.866H10.0934V4ZM6.55349 4.00065H7.81386V7.81378H4.00065V6.55344C4.00065 5.15342 5.15345 4.00065 6.55349 4.00065ZM4 10.0934H7.81321V13.9066H4V10.0934ZM17.4479 19.9679H16.1875V16.1869H20.0007V17.4071V17.4151C20.0007 18.8151 18.8487 19.9679 17.4479 19.9679ZM10.0938 16.1869H13.907V20H10.0938V16.1869ZM4 17.4472V16.1869H7.81321V20H6.55284C5.15279 20 4 18.8472 4 17.4472Z'
      fill='#333333'
    />
  </IconBase>
))
