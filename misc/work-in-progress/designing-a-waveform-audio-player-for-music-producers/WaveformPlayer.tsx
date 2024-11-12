'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import waveformGraphic from './waveform.png'

const iconSize = 18

function VolumeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${iconSize}px`}
      viewBox="0 -960 960 960"
      width={`${iconSize}px`}
      fill="#5f6368"
    >
      <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${iconSize}px`}
      viewBox="0 -960 960 960"
      width={`${iconSize}px`}
      fill="#5f6368"
    >
      <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
    </svg>
  )
}

function RemoveIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${iconSize}px`}
      viewBox="0 -960 960 960"
      width={`${iconSize}px`}
      fill="#5f6368"
    >
      <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </svg>
  )
}

function RewindIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${iconSize}px`}
      viewBox="0 -960 960 960"
      width={`${iconSize}px`}
      fill="#5f6368"
    >
      <path d="M240-240v-480h80v480h-80Zm440 0L440-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
  )
}

const purpleContainer = clsx(
  'bg-gradient-to-r from-fuchsia-100 via-violet-100 to-purple-100 px-2 py-1 border border-purple-200 rounded-md',
)

const textColour = 'text-slate-700'

interface TimeStampProps {
  startTime: string
  endTime: string
}

function TimeStamp({ startTime, endTime }: TimeStampProps) {
  return (
    <>
      <span className={clsx(textColour, 'text-sm')}>{startTime}</span>
      <span className="text-gray-400 mx-1">/</span>
      <span className={clsx(textColour, 'text-sm mr-1')}>{endTime}</span>
    </>
  )
}

const iconMap = {
  volume: VolumeIcon,
  play: PlayIcon,
  rewind: RewindIcon,
  remove: RemoveIcon,
}

type IconName = keyof typeof iconMap

interface IconProps {
  icon: IconName
  onClick?: () => void
}

function Icon({ icon, onClick }: IconProps) {
  const IconComponent = iconMap[icon]
  return (
    <div
      className="p-0.5 hover:bg-purple-200 inline-flex items-center justify-center rounded cursor-pointer"
      onClick={onClick}
    >
      <IconComponent />
    </div>
  )
}

function VolumeControls() {
  return (
    <>
      <Icon icon="volume" />
      <span className="w-14 h-1 ml-1 bg-gray-400 rounded-lg"></span>
    </>
  )
}

interface SelectButtonProps {
  onClick: () => void
}

function SelectFileButton({ onClick }: SelectButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
    >
      <span className="relative px-3 py-1 transition-all ease-in duration-100 bg-purple-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Select file
      </span>
    </button>
  )
}

export default function WaveformPlayer() {
  const [fileLoaded, setFileLoaded] = useState(false)

  const fileName = 'disco-kick.wav'
  const message = fileLoaded ? fileName : 'Please select an audio file'
  const startTime = fileLoaded ? '0:43' : '0:00'
  const endTime = fileLoaded ? '2:57' : '0:00'

  const toggleFile = () => {
    setFileLoaded(prevState => !prevState)
  }
  return (
    <div
      className={clsx(
        'border-gray-300 dark:border-gray-700',
        'max-w-3xl mx-auto my-8 border rounded-lg overflow-hidden',
        'shadow-lg md:shadow-2xl',
        'shadow-gray-800 dark:shadow-gray-900',
      )}
    >
      <div className={clsx('bg-gray-300 dark:bg-gray-800', 'px-4 py-1 flex items-center justify-between')}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <p className="text-sm text-gray-800 dark:text-gray-200 truncate text-center">Waveform Player</p>
        <div className="hidden md:block w-[51px]"></div>
      </div>
      <div className={clsx('flex flex-col w-full p-2', 'bg-indigo-50', 'gap-2')}>
        <div className={clsx(purpleContainer, 'flex h-24 items-center justify-center overflow-hidden')}>
          {fileLoaded ? (
            <Image
              src={waveformGraphic}
              alt={`Waveform graphic`}
              className="w-full object-cover"
              style={{ maxHeight: '100%' }}
            />
          ) : (
            <SelectFileButton onClick={toggleFile} />
          )}
        </div>
        <div className="flex flex-row space-x-2">
          <div className={clsx(purpleContainer, 'flex items-center')}>
            <TimeStamp startTime={startTime} endTime={endTime} />
            <Icon icon="rewind" />
            <Icon icon="play" />
            <VolumeControls />
          </div>
          <div
            className={clsx(
              purpleContainer,
              'flex-grow flex justify-between',
              textColour,
              'text-sm',
              'truncate',
            )}
          >
            <span className="truncate">{message}</span>
            {fileLoaded && <Icon icon={`remove`} onClick={toggleFile} />}
          </div>
        </div>
      </div>
    </div>
  )
}
