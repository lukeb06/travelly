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
		end, 2000)
	end, 2000)
end, 2000)
