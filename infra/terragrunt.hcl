remote_state {
  backend = "s3"

  config = {
    bucket  = "infrastructure-grow"
    key     = "terraform/${path_relative_to_include()}/terraform.tfstate"
    region  = "ap-southeast-2"
    profile = "hosting"
  }
}

terraform {
  extra_arguments "tfvars" {
    commands  = get_terraform_commands_that_need_vars()
    arguments = ["-var", "root=${get_parent_terragrunt_dir()}"]
  }

  extra_arguments "vars" {
    commands = get_terraform_commands_that_need_vars()

    required_var_files = [
      "${get_parent_terragrunt_dir()}/common.tfvars",
      "${get_terragrunt_dir()}/../env.tfvars",
    ]
  }

  extra_arguments "auto_approve" {
    commands = [
      "apply",
    ]

    arguments = [
      "-auto-approve",
    ]
  }
}
