vimux_run_command("cd backend && npm run start")

local function run_later(fn, delay)
	vim.defer_fn(fn, delay)
end

run_later(function()
	vim.cmd(":VimuxTogglePane")

	run_later(function()
		vim.cmd(":VimuxOpenRunner")

		run_later(function()
			vimux_run_command("cd frontend && npm run dev")

			run_later(function()
				vim.cmd(":VimuxOpenRunner")

				run_later(function()
					vimux_run_command("cd frontend && npm run build:watch")
				end, 1500)
			end, 1500)
		end, 1500)
	end, 1500)
end, 1500)
