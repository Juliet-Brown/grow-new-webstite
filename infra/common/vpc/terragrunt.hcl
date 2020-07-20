terraform {
  source = "git::git@github.com:springload/terragrunt-modules.git//vpc?ref=0.3-120-g59064d3"
}

include {
  path = find_in_parent_folders()
}
