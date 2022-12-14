import React from 'react'
import * as Switch from '@radix-ui/react-switch'
import { settings$ } from '@/store'
import './index.css'
import { useSelector } from '@legendapp/state/react'

const Header: React.FC = () => {
  const theme = useSelector(() => settings$.get().theme)
  const isEnabled = React.useMemo(
    (): boolean => (theme === 'light' ? true : false),
    [theme],
  )

  const handleOnChange = React.useCallback(() => {
    if (theme === 'light') {
      settings$.theme.set('dark')
      return
    }

    if (theme === 'dark') {
      settings$.theme.set('light')
    }
  }, [theme])

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      return
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <header>
      <div className="flex justify-start items-center">
        <svg
          className="w-9 h-9 inline-block"
          viewBox="0 0 312 247"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M285.548 129.735V77.8431H259.596V51.8922H233.625V38.9216H259.596V0H220.659V25.9412H194.688V51.8922H116.812V25.9412H90.8607V0H51.9232V38.9216H77.875V51.8922H51.9232V77.8431H25.9713V129.735H0V220.549H38.9375V168.657H51.9232V220.549H77.875V246.5H142.784V207.578H90.8607V194.608H220.659V207.578H168.736V246.5H233.625V220.549H259.596V168.657H272.562V220.549H311.5V129.735H285.548ZM116.812 116.765H77.875V77.8431H116.812V116.765ZM233.625 116.765H194.688V77.8431H233.625V116.765Z"
            fill="currentColor"
          />
        </svg>

        <h1 className="text-2xl font-bold tracking-tighter indent-2">
          <a href="/">Prototypr</a>
        </h1>
      </div>
      <div>
        <form>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label className="sr-only" htmlFor="airplane-mode">
              Theme
            </label>
            <Switch.Root
              className="SwitchRoot"
              id="airplane-mode"
              checked={isEnabled}
              onCheckedChange={handleOnChange}
            >
              <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header
