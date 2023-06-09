import time
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters

TOKEN = '5864006344:AAHeLTzYcHQLvkwMryz-uVfnC_Fp5AcHHck'  # Replace with your Telegram bot token
MESSAGE_INTERVAL = 15 * 60  # 15 minutes

def send_post(context):
    # Replace this with the content of your post
    post_text = "Hello, this is an automated post!"

    # Send the post to all the groups where the bot is a member and the sender is an admin
    for chat_id, chat_info in context.bot.get_chat_members_count().items():
        if chat_info['status'] == 'administrator':
            context.bot.send_message(chat_id=chat_id, text=post_text)

def start(update, context):
    # Start the job and run it every MESSAGE_INTERVAL seconds
    context.job_queue.run_repeating(send_post, interval=MESSAGE_INTERVAL, first=0)

def main():
    # Create the Updater and pass your bot's token
    updater = Updater(TOKEN, use_context=True)

    # Get the dispatcher to register handlers
    dp = updater.dispatcher

    # Define a command handler for the /start command
    dp.add_handler(CommandHandler("start", start))

    # Start the Bot
    updater.start_polling()

    # Run the bot until you press Ctrl-C or the process receives SIGINT, SIGTERM, or SIGABRT
    updater.idle()

if __name__ == '__main__':
    main()
