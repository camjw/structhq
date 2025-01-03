def preprocessing_filter_spec(endpoints):
    filtered = []

    for path, path_regex, method, callback in endpoints:
        # Remove all internal paths
        if path.startswith("/internal/"):
            continue

        filtered.append((path, path_regex, method, callback))

    return filtered
