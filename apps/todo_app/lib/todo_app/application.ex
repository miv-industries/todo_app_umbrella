defmodule TodoApp.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      TodoApp.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: TodoApp.PubSub}
      # Start a worker by calling: TodoApp.Worker.start_link(arg)
      # {TodoApp.Worker, arg}
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: TodoApp.Supervisor)
  end
end
