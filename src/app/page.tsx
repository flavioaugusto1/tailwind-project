import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your personal info
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm text-zinc-700 shadow-sm hover:border-zinc-50"
            >
              Cancel
            </button>
            <button
              form="settings"
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
        <form id="settings" className="mt-6 flex w-full flex-col ">
          Formulário aqui
        </form>
      </div>
    </>
  )
}
