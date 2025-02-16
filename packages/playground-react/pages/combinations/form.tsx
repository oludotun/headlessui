import { useState } from 'react'
import { Switch, RadioGroup, Listbox, Combobox } from '@headlessui/react'
import { classNames } from '../../utils/class-names'

function Section({ title, children }) {
  return (
    <fieldset className="rounded-lg border bg-gray-200/20 p-3">
      <legend className="rounded-md border bg-gray-100 px-2 text-sm uppercase">{title}</legend>
      <div className="flex flex-col gap-3">{children}</div>
    </fieldset>
  )
}

let sizes = ['xs', 'sm', 'md', 'lg', 'xl']
let people = [
  { id: 1, name: { first: 'Alice' } },
  { id: 2, name: { first: 'Bob' } },
  { id: 3, name: { first: 'Charlie' } },
]
let locations = ['New York', 'London', 'Paris', 'Berlin']

export default function App() {
  let [result, setResult] = useState(() => (typeof window === 'undefined' ? [] : new FormData()))
  let [notifications, setNotifications] = useState(false)
  let [apple, setApple] = useState(false)
  let [banana, setBanana] = useState(false)
  let [size, setSize] = useState(sizes[(Math.random() * sizes.length) | 0])
  let [person, setPerson] = useState(people[(Math.random() * people.length) | 0])
  let [activeLocation, setActiveLocation] = useState(
    locations[(Math.random() * locations.length) | 0]
  )
  let [query, setQuery] = useState('')

  return (
    <div className="py-8">
      <form
        className="mx-auto flex h-full max-w-4xl flex-col items-start justify-center gap-8 rounded-lg border bg-white p-6"
        onSubmit={(event) => {
          event.preventDefault()
          setResult(new FormData(event.currentTarget))
        }}
      >
        <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(350px,1fr))] items-start gap-3">
          <Section title="Switch">
            <Section title="Single value">
              <Switch.Group as="div" className="flex items-center justify-between space-x-4">
                <Switch.Label>Enable notifications</Switch.Label>

                <Switch
                  as="button"
                  checked={notifications}
                  onChange={setNotifications}
                  name="notifications"
                  className={({ checked }) =>
                    classNames(
                      'focus:shadow-outline relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
                      checked ? 'bg-indigo-600' : 'bg-gray-200'
                    )
                  }
                >
                  {({ checked }) => (
                    <>
                      <span
                        className={classNames(
                          'inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out',
                          checked ? 'translate-x-5' : 'translate-x-0'
                        )}
                      />
                    </>
                  )}
                </Switch>
              </Switch.Group>
            </Section>

            <Section title="Multiple values">
              <Switch.Group as="div" className="flex items-center justify-between space-x-4">
                <Switch.Label>Apple</Switch.Label>

                <Switch
                  as="button"
                  checked={apple}
                  onChange={setApple}
                  name="fruit[]"
                  value="apple"
                  className={({ checked }) =>
                    classNames(
                      'focus:shadow-outline relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
                      checked ? 'bg-indigo-600' : 'bg-gray-200'
                    )
                  }
                >
                  {({ checked }) => (
                    <>
                      <span
                        className={classNames(
                          'inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out',
                          checked ? 'translate-x-5' : 'translate-x-0'
                        )}
                      />
                    </>
                  )}
                </Switch>
              </Switch.Group>

              <Switch.Group as="div" className="flex items-center justify-between space-x-4">
                <Switch.Label>Banana</Switch.Label>
                <Switch
                  as="button"
                  checked={banana}
                  onChange={setBanana}
                  name="fruit[]"
                  value="banana"
                  className={({ checked }) =>
                    classNames(
                      'focus:shadow-outline relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
                      checked ? 'bg-indigo-600' : 'bg-gray-200'
                    )
                  }
                >
                  {({ checked }) => (
                    <>
                      <span
                        className={classNames(
                          'inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out',
                          checked ? 'translate-x-5' : 'translate-x-0'
                        )}
                      />
                    </>
                  )}
                </Switch>
              </Switch.Group>
            </Section>
          </Section>
          <Section title="Radio Group">
            <RadioGroup value={size} onChange={setSize} name="size">
              <div className="flex -space-x-px rounded-md bg-white">
                {sizes.map((size) => {
                  return (
                    <RadioGroup.Option
                      key={size}
                      value={size}
                      className={({ active }) =>
                        classNames(
                          'relative flex w-20 border px-2 py-4 first:rounded-l-md last:rounded-r-md focus:outline-none',
                          active ? 'z-10 border-indigo-200 bg-indigo-50' : 'border-gray-200'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <div className="flex w-full items-center justify-between">
                          <div className="ml-3 flex cursor-pointer flex-col">
                            <span
                              className={classNames(
                                'block text-sm font-medium leading-5',
                                active ? 'text-indigo-900' : 'text-gray-900'
                              )}
                            >
                              {size}
                            </span>
                          </div>
                          <div>
                            {checked && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-indigo-500"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      )}
                    </RadioGroup.Option>
                  )
                })}
              </div>
            </RadioGroup>
          </Section>
          <Section title="Listbox">
            <div className="w-full space-y-1">
              <Listbox value={person} onChange={setPerson} name="person">
                <div className="relative">
                  <span className="inline-block w-full rounded-md shadow-sm">
                    <Listbox.Button className="focus:shadow-outline-blue relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5">
                      <span className="block truncate">{person.name.first}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Listbox.Button>
                  </span>

                  <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                    <Listbox.Options className="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          value={person}
                          className={({ active }) => {
                            return classNames(
                              'relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none',
                              active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                            )
                          }}
                        >
                          {({ active, selected }) => (
                            <>
                              <span
                                className={classNames(
                                  'block truncate',
                                  selected ? 'font-semibold' : 'font-normal'
                                )}
                              >
                                {person.name.first}
                              </span>
                              {selected && (
                                <span
                                  className={classNames(
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                    active ? 'text-white' : 'text-indigo-600'
                                  )}
                                >
                                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </div>
              </Listbox>
            </div>
          </Section>
          <Section title="Combobox">
            <div className="w-full space-y-1">
              <Combobox
                as="div"
                name="location"
                value={activeLocation}
                onChange={(location) => setActiveLocation(location)}
                className="w-full rounded border border-black/5 bg-white bg-clip-padding shadow-sm"
              >
                {({ open }) => {
                  return (
                    <div className="relative">
                      <div className="flex w-full flex-col">
                        <Combobox.Input
                          onChange={(e) => setQuery(e.target.value)}
                          className="w-full rounded-md border-none px-3 py-1 outline-none"
                          placeholder="Search users..."
                        />
                        <div
                          className={classNames(
                            'flex border-t',
                            activeLocation && !open ? 'border-transparent' : 'border-gray-200'
                          )}
                        >
                          <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                            <Combobox.Options className="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
                              {locations.map((location) => (
                                <Combobox.Option
                                  key={location}
                                  value={location}
                                  className={({ active }) => {
                                    return classNames(
                                      'relative  flex cursor-default select-none space-x-4 py-2 pl-3 pr-9 focus:outline-none',
                                      active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                    )
                                  }}
                                >
                                  {({ active, selected }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          'block truncate',
                                          selected ? 'font-semibold' : 'font-normal'
                                        )}
                                      >
                                        {location}
                                      </span>
                                      {active && (
                                        <span
                                          className={classNames(
                                            'absolute inset-y-0 right-0 flex items-center pr-4',
                                            active ? 'text-white' : 'text-indigo-600'
                                          )}
                                        >
                                          <svg className="h-5 w-5" viewBox="0 0 25 24" fill="none">
                                            <path
                                              d="M11.25 8.75L14.75 12L11.25 15.25"
                                              stroke="currentColor"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </span>
                                      )}
                                    </>
                                  )}
                                </Combobox.Option>
                              ))}
                            </Combobox.Options>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }}
              </Combobox>
            </div>
          </Section>
        </div>

        <button className="focus:shadow-outline-blue rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 shadow-sm transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5">
          Submit
        </button>

        <div className="w-full border-t py-4">
          <span>Form data (entries):</span>
          <pre className="text-sm">{JSON.stringify([...result.entries()], null, 2)}</pre>
        </div>
      </form>
    </div>
  )
}
