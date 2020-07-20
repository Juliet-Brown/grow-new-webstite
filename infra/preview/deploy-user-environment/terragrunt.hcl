terraform {
  source = "git::git@github.com:springload/terragrunt-modules.git//deploy-user-environment?ref=0.3-94-g70c6d96"
}

include {
  path = find_in_parent_folders()
}
