import chalk from 'chalk';
import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
      ${chalk.yellow('A program for preparing data for the REST API of the server.')}

      example:
        cli.js --<command> [--arguments]

      Available commands:
        ${chalk.green('--version')}:         # output version
        ${chalk.green('--help')}:            # output help
        ${chalk.green('--import <path>')}:   # import data from tsv file,
                                              <path> - path to text file

        ${chalk.green('--generate <count> <path> <url>')}: # generates an arbitrary amount of text data.
                                          <path> the path where the new file will be created.
                                          <url> the server that the data will be generated from.
                                          example: --generate 1 ./mocks/test-data.tsv http://localhost:3123/api
    `);
  }
}
