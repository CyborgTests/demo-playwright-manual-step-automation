FROM gitpod/workspace-full-vnc

# Additional dependencies for Chromium
USER root
RUN sudo apt-get update && sudo apt-get install -y \
    libnss3 libxss1 libatk-bridge2.0-0 libgtk-3-0 \
    && sudo rm -rf /var/lib/apt/lists/*

USER gitpod
